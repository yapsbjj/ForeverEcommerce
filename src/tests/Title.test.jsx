import { render, screen } from '@testing-library/react'
import Title from '../components/Title'

describe('Composant Title', () => {

    it('affiche text1 et text2 correctement', () => {
        render(<Title text1="DERNIERE" text2="COLLECTION" />)
        expect(screen.getByText(/DERNIERE/i)).toBeInTheDocument()
        expect(screen.getByText(/COLLECTION/i)).toBeInTheDocument()
    })

    it('affiche la ligne décorative', () => {
        const { container } = render(<Title text1="A" text2="B" />)
        // La ligne décorative est un <p> avec une classe bg-gray-700
        const ligne = container.querySelector('.bg-gray-700')
        expect(ligne).toBeInTheDocument()
    })

})