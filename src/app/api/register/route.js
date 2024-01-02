import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { User } from '../../../models/User.js'
import connect from '../../../../db.js'

export async function POST(req) {
    const body = await req.json();
    try
    {
        await connect()
    } catch (error)
    {
        return Response.json({ msg: "Error fetching Useres in db", success: false, error }, { status: 501 })
    }
    const pass = body.password;
    if (!pass?.length || pass.length < 5)
    {
        const error = new Error('password must be at least 5 characters');
        return Response.json({ msg: "Error fetching Useres in db", success: false, error }, { status: 401, statusText: "password at least 5 characters" })
    }

    const notHashedPassword = pass;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(notHashedPassword, salt);

    try
    {
        const createdUser = await User.create(body);
        return Response.json(createdUser);
    } catch (error)
    {
        return Response.json({ msg: "Error fetching Useres", success: false, error: error }, { status: 501, statusText: error.code })
    }
}