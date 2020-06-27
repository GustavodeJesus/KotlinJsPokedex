import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass

/**
 * @author: Gustavo de Jesus Gomes
 * Project: KotlinJsPokedex
 **/

class CardBuilder {

    fun build(pokemon: Pokemon): HTMLElement {
        val containerElement = document.createElement("div") as HTMLDivElement
        val imageElement = document.createElement("img") as HTMLImageElement
        val titleElement = document.createElement("div") as HTMLDivElement
        val priceElement = document.createElement("div") as HTMLDivElement
        val descriptionElement = document.createElement("div") as HTMLDivElement
        val viewDetailsButtonElement = document.createElement("button") as HTMLButtonElement

        bind(
                pokemon = pokemon,
                imageElement = imageElement,
                titleElement = titleElement,
                priceElement = priceElement,
                descriptionElement = descriptionElement,
                viewDetailsButtonElement = viewDetailsButtonElement
        )

        applyStyle(
                containerElement = containerElement,
                imageElement = imageElement,
                titleElement = titleElement,
                priceElement = priceElement,
                descriptionElement = descriptionElement,
                viewDetailsButtonElement = viewDetailsButtonElement
        )

        containerElement.appendChild(
                imageElement,
                titleElement,
                priceElement,
                descriptionElement,
                viewDetailsButtonElement
        )

        return containerElement
    }

    private fun applyStyle(
            containerElement: HTMLDivElement,
            imageElement: HTMLImageElement,
            titleElement: HTMLDivElement,
            priceElement: HTMLDivElement,
            descriptionElement: HTMLDivElement,
            viewDetailsButtonElement: HTMLButtonElement
    ) {
        containerElement.addClass("card", "card-shadow")
        imageElement.addClass("cover-image")
        titleElement.addClass("text-title", "float-left")
        descriptionElement.addClass("text-description", "float-left")
        priceElement.addClass("text-price", "float-left")
        viewDetailsButtonElement.addClass("view-details", "ripple", "float-right")
    }

    private fun bind(
            pokemon: Pokemon,
            imageElement: HTMLImageElement,
            titleElement: HTMLDivElement,
            priceElement: HTMLDivElement,
            descriptionElement: HTMLDivElement,
            viewDetailsButtonElement: HTMLButtonElement
    ) {

        imageElement.src = pokemon.ThumbnailImage
        titleElement.innerHTML = pokemon.name
        priceElement.innerHTML = pokemon.number
        descriptionElement.innerHTML = pokemon.slug
        viewDetailsButtonElement.innerHTML = "Ver detalhes"

        viewDetailsButtonElement.addEventListener("click", {
            window.open(pokemon.detailPageURL)
        })
    }

    private fun Element.appendChild(vararg elements: Element) {
        elements.forEach {
            this.appendChild(it)
        }
    }


}