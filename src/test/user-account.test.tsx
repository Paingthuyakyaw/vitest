import { describe, it, expect } from "vitest"
import UserAccount, { type userProps } from "../components/user-account"
import { render, screen } from "@testing-library/react"

describe("UserAccount", () => {
    it("should render", () => {
        const user : userProps = {
            id: 1,
            name: "John",
            isAdmin: true
        }
        render(<UserAccount user={user} />)
       expect(screen.getByRole('heading', { name: user.name })).toBeInTheDocument()
    })


    it("should render a button if the user is an admin", () => {
        const user : userProps = {
            id: 1,
            name: "John",
            isAdmin: true
        }
        render(<UserAccount user={user} />)
        expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument()
    })

    it("should not render a button if the user is not an admin", () => {
        const user = {id : 1, name : "John"}

        render(<UserAccount user={user as userProps} />)
        expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
})