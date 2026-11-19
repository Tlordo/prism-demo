import { prisma } from "../db.js"

export const getUsers = () =>
    prisma.user.findMany({
        include: { posts: true},
        orderBy: {createdAt: 'desc'},
    })

export const getUserById = (id) =>
    prisma.user.findUnique({
        where: {id},
        include: {posts: true},
    })

export const createUser = (data) =>
    prisma.user,create({data})

export const updateUser = (id, data) =>
    prisma.user.update({where: {id}, data})

export const deleteUser = (id) =>
    prisma.user.delete({where: {id}})
