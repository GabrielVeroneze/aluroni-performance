import { useContext, useEffect } from 'react'
import { PratosContext } from './PratosContext'

export const usePratos = () => {
    const { pratos, setPratos } = useContext(PratosContext)

    useEffect(() => {
        (async function () {
            try {
                const resposta = await fetch('https://my-json-server.typicode.com/gabrielveroneze/aluroni-api/itens')
                const dados = await resposta.json()
                setPratos(dados)
            } catch (erro) {
                console.log(erro)
            }
        })()
    }, [setPratos])

    return {
        pratos
    }
}
