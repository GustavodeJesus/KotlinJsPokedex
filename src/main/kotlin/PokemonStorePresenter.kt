import org.w3c.xhr.XMLHttpRequest

/**
 * @author: Gustavo de Jesus Gomes
 * Project: KotlinJsPokedex
 **/
class PokemonStorePresenter : PokemonStoreContract.Presenter {

    private lateinit var view: PokemonStoreContract.View

    override fun attach(view: PokemonStoreContract.View) {
        this.view = view
    }

    override fun loadPokemons() {
        view.showLoading()
        getAsync(API_URL) { response ->
            val pokemons = JSON.parse<Array<Pokemon>>(response)
            view.hideLoading()
            view.showPokemons(pokemons = pokemons.toList())
            pokemons.forEach {
                println(it.name)
            }
        }
    }

    private fun getAsync(url: String, callback: (String) -> Unit) {
        val xmlHttp = XMLHttpRequest()
        xmlHttp.open("GET", url)
        xmlHttp.onload = {
            if (xmlHttp.readyState == 4.toShort() && xmlHttp.status == 200.toShort()) {
                callback.invoke(xmlHttp.responseText)
            } else {
                println(xmlHttp.statusText  )
            }
        }
        xmlHttp.send()
    }
}