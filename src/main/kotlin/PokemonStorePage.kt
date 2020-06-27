import org.w3c.dom.HTMLDivElement
import kotlin.browser.document

/**
 * @author: Gustavo de Jesus Gomes
 * Project: KotlinJsPokedex
 **/
class PokemonStorePage(private val presenter: PokemonStoreContract.Presenter) : PokemonStoreContract.View {

    private val loader = document.getElementById("loader") as HTMLDivElement
    private val content = document.getElementById("content") as HTMLDivElement
    private val cardBuilder = CardBuilder()

    override fun showPokemons(pokemons: List<Pokemon>) {
        pokemons.forEach {
            val card = cardBuilder.build(it)
            content.appendChild(card)
        }
    }

    override fun showLoading() {
        loader.style.visibility = "visible"
    }

    override fun hideLoading() {
        loader.style.visibility = "hidden"
    }

    fun show() {
        presenter.attach(this)
        presenter.loadPokemons()
    }

}