
val API_URL = js("getApiUrl()") as String
fun main() {
    val pokemonStorePresenter = PokemonStorePresenter()
    val pokemonStorePage = PokemonStorePage(pokemonStorePresenter)
    pokemonStorePage.show()
}