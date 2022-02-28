

const isAuthenticatedGuard = async (to, from, next) => {
    /**Lo puedo hacer asíncrono */
    return new Promise(() => {
        const random = Math.random() * 100
        
        if ( random > 50 )
        {
            console.log('Está autenticado')
            next()
        }    
        else {
            console.log('Bloqueado por el isAuthenticatedGuard', random)
            next({name: 'pokemon-home'}) /**Aquí podríamos redireccionar en un caso real
            a la de login si el token expiró por ejemplo */
            /**Una vez que entro en el layout de DBZ y me deja entrar ya no se dispara
             * el guard navegando entre sus rutas, para que se vuelva a disparar tendríamos
             * que salir (por ejemplo a pokemon) y volver a entrar
             */
        }
    })
}

export default isAuthenticatedGuard