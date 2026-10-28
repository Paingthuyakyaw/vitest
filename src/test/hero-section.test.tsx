import HeroSection from "../components/hero-section"
import { render , screen} from "@testing-library/react"
import "@testing-library/jest-dom/vitest"



describe('HeroSection', () => { 
    it('should render', () => {
        render(<HeroSection/>);
      const button =   screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
});