/**
 * @author: Gustavo de Jesus Gomes
 * Project: KotlinJsPokedex
 **/
interface PokemonStoreContract {

    interface View {
        fun showPokemons(pokemons: List<Pokemon>)
        fun showLoading()
        fun hideLoading()
    }

    interface Presenter {
        fun attach(view: View)
        fun loadPokemons()
    }
}