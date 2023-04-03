import { render, fireEvent, screen } from "@testing-library/react"
import App from "./App";
import InputNuevaNota from "./components/InputNuevaNota";
import ListadoNotas from './components/ListadoNotas'

describe('REACT - Testeamos los componentes', () => {
    test('El listado se renderiza correctamente', () => {
        const view = render(<ListadoNotas />);
        expect(view).toBeDefined();
    })
    test('El listado renderiza un listado correctamente', () => {
        const notas = ["bajar la basura", "Comprar huevos"];
        const view = render(<ListadoNotas notas={notas} />);
        expect(view).toBeDefined();
    })
    /* test('El listado renderiza sólo las notas que debe renderizar', () => {
        const notas = ["bajar la basura", "Comprar huevos"];
        const view = render(<ListadoNotas notas={notas} />);
        const div = view.getByLabelText('listado-notas');
        expect(div.childElementCount).toBe(2);
    }) */
    test('El listado renderiza sólo las notas que debe renderizar', () => {
        const notas = ["bajar la basura", "Comprar huevos"];
        render(<ListadoNotas notas={notas} />);
        const div = screen.getByLabelText('listado-notas');
        expect(div.childElementCount).toBe(2);
      })
})

describe('REACT - Hacemos un test de integración', () => {
    test('Renderizamos la app', () => {
        const view = render(<App />)
        expect(view).toBeDefined();
    })
    test('Se renderiza el input', () => {
        const placeholdertext = "Introduce una nueva nota";
        render(<App />)
        const input = screen.getByPlaceholderText(placeholdertext);
        expect(input).toBeDefined();
    })
    test('Cuando hacemos clic en el botón Añadir, se lanza el evento', () => {
        const funcionMock = jest.fn();
        render(<InputNuevaNota addNuevaNota={funcionMock} />);
        const button = screen.getByText("Añadir");
        fireEvent.click(button);
        expect(funcionMock).toHaveBeenCalledTimes(1);
    })
    test('Añadimos una nueva nota', () => {
        const placeholdertext = "Introduce una nueva nota";
        render(<App />)
        const input = screen.getByPlaceholderText(placeholdertext);
        const button = screen.getByText("Añadir");
        const div = screen.getByLabelText('listado-notas');
        const hijosInicial = div.childElementCount;
        fireEvent.change(input, { target: { value: 'Poner gasolina' } });
        fireEvent.click(button);
        const hijosFinal = div.childElementCount;
        expect(hijosFinal).toBeGreaterThan(hijosInicial);
        expect(hijosInicial).toBeLessThan(hijosFinal);
        expect(hijosInicial).not.toBe(hijosFinal);
    })
})