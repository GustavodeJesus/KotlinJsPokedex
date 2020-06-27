/**
 * @author: Gustavo de Jesus Gomes
 * Project: KotlinJsPokedex
 **/
data class Pokemon(
    val ThumbnailAltText: String,
    val ThumbnailImage: String,
    val collectibles_slug: String,
    val detailPageURL: String,
    val featured: String,
    val height: Double,
    val id: Int,
    val name: String,
    val number: String,
    val slug: String,
    val weight: Double
)