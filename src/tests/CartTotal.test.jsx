import { render, screen } from '@testing-library/react'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'

// Fonction utilitaire pour rendre le composant avec un contexte personnalisé
const renderWithContext = (cartAmount) => {
    const mockContext = {
        currency: '€',
        delivery_fee: 10,
        getCartAmount: () => cartAmount
    }
    return render(
        <ShopContext.Provider value={mockContext}>
            <CartTotal />
        </ShopContext.Provider>
    )
}

describe('Composant CartTotal', () => {

    it('affiche 0 comme total si le panier est vide', () => {
        renderWithContext(0)
        // Quand getCartAmount() === 0, le total affiché doit être 0
        const totals = screen.getAllByText(/0/i)
        expect(totals.length).toBeGreaterThan(0)
    })

    it('affiche le bon total avec frais de port', () => {
        renderWithContext(50)
        // 50 + 10 = 60
        expect(screen.getByText(/60/i)).toBeInTheDocument()
    })

    it('affiche les frais de port', () => {
        renderWithContext(50)
        expect(screen.getByText(/Frais de Port/i)).toBeInTheDocument()
        expect(screen.getByText(/10/i)).toBeInTheDocument()
    })

})