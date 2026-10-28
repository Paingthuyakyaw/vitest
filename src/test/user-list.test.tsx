import { describe, it, expect } from "vitest"
import {  render, screen } from "@testing-library/react"
import UserList from "../components/user-list"

describe("UserList", () => {
    it("should call the link when the clicked", () => {
        const users = [{id : "1" , name : "Paing"}]
        render(<UserList users={users} />)
        users.forEach(user => {
         const link =   screen.getByRole("link" , {name : user.name})
         expect(link).toBeInTheDocument();
         expect(link).toHaveAttribute("href",`/users/${user.id}`)
        })
       
    })
})