import { render, screen } from '@testing-library/react'
import Term from '../components/term'
import userEvent from '@testing-library/user-event'

describe("Term Section", () => {
    it("should render the term section", () => {
        render(<Term />)
        expect(screen.getByText("Terms and Conditions")).toBeInTheDocument()
    })

    it("should checked the checkbox", () => {
        render(<Term />)
        const checkbox = screen.getByRole("checkbox")
        const button = screen.getByRole("button" , {name : /submit/i})
        expect(checkbox).toBeInTheDocument()
        expect(checkbox).not.toBeChecked()
        expect(button).toBeDisabled()
    })
    it("should not submit if the checkbox is not checked", async() => {
        render(<Term />)
        const checkbox = screen.getByRole("checkbox")
        const userE =  userEvent.setup();
        await userE.click(checkbox)

        const button = screen.getByRole("button")
        expect(checkbox).toBeChecked()
        expect(button).toBeEnabled()
    })
})