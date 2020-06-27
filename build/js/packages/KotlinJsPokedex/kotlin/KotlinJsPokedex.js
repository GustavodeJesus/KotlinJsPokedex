(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinJsPokedex'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinJsPokedex'.");
    }root.KotlinJsPokedex = factory(typeof KotlinJsPokedex === 'undefined' ? {} : KotlinJsPokedex, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwUPAE = Kotlin.throwUPAE;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toShort = Kotlin.toShort;
  function CardBuilder() {
  }
  CardBuilder.prototype.build_kximr7$ = function (pokemon) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var containerElement = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var imageElement = Kotlin.isType(tmp$_0 = document.createElement('img'), HTMLImageElement) ? tmp$_0 : throwCCE();
    var titleElement = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLDivElement) ? tmp$_1 : throwCCE();
    var priceElement = Kotlin.isType(tmp$_2 = document.createElement('div'), HTMLDivElement) ? tmp$_2 : throwCCE();
    var descriptionElement = Kotlin.isType(tmp$_3 = document.createElement('div'), HTMLDivElement) ? tmp$_3 : throwCCE();
    var viewDetailsButtonElement = Kotlin.isType(tmp$_4 = document.createElement('button'), HTMLButtonElement) ? tmp$_4 : throwCCE();
    this.bind_0(pokemon, imageElement, titleElement, priceElement, descriptionElement, viewDetailsButtonElement);
    this.applyStyle_0(containerElement, imageElement, titleElement, priceElement, descriptionElement, viewDetailsButtonElement);
    this.appendChild_0(containerElement, [imageElement, titleElement, priceElement, descriptionElement, viewDetailsButtonElement]);
    return containerElement;
  };
  CardBuilder.prototype.applyStyle_0 = function (containerElement, imageElement, titleElement, priceElement, descriptionElement, viewDetailsButtonElement) {
    addClass(containerElement, ['card', 'card-shadow']);
    addClass(imageElement, ['cover-image']);
    addClass(titleElement, ['text-title', 'float-left']);
    addClass(descriptionElement, ['text-description', 'float-left']);
    addClass(priceElement, ['text-price', 'float-left']);
    addClass(viewDetailsButtonElement, ['view-details', 'ripple', 'float-right']);
  };
  function CardBuilder$bind$lambda(closure$pokemon) {
    return function (it) {
      window.open(closure$pokemon.detailPageURL);
      return Unit;
    };
  }
  CardBuilder.prototype.bind_0 = function (pokemon, imageElement, titleElement, priceElement, descriptionElement, viewDetailsButtonElement) {
    imageElement.src = pokemon.ThumbnailImage;
    titleElement.innerHTML = pokemon.name;
    priceElement.innerHTML = pokemon.number;
    descriptionElement.innerHTML = pokemon.slug;
    viewDetailsButtonElement.innerHTML = 'Ver detalhes';
    viewDetailsButtonElement.addEventListener('click', CardBuilder$bind$lambda(pokemon));
  };
  CardBuilder.prototype.appendChild_0 = function ($receiver, elements) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
      var element = elements[tmp$];
      $receiver.appendChild(element);
    }
  };
  CardBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CardBuilder',
    interfaces: []
  };
  function Pokemon(ThumbnailAltText, ThumbnailImage, collectibles_slug, detailPageURL, featured, height, id, name, number, slug, weight) {
    this.ThumbnailAltText = ThumbnailAltText;
    this.ThumbnailImage = ThumbnailImage;
    this.collectibles_slug = collectibles_slug;
    this.detailPageURL = detailPageURL;
    this.featured = featured;
    this.height = height;
    this.id = id;
    this.name = name;
    this.number = number;
    this.slug = slug;
    this.weight = weight;
  }
  Pokemon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pokemon',
    interfaces: []
  };
  Pokemon.prototype.component1 = function () {
    return this.ThumbnailAltText;
  };
  Pokemon.prototype.component2 = function () {
    return this.ThumbnailImage;
  };
  Pokemon.prototype.component3 = function () {
    return this.collectibles_slug;
  };
  Pokemon.prototype.component4 = function () {
    return this.detailPageURL;
  };
  Pokemon.prototype.component5 = function () {
    return this.featured;
  };
  Pokemon.prototype.component6 = function () {
    return this.height;
  };
  Pokemon.prototype.component7 = function () {
    return this.id;
  };
  Pokemon.prototype.component8 = function () {
    return this.name;
  };
  Pokemon.prototype.component9 = function () {
    return this.number;
  };
  Pokemon.prototype.component10 = function () {
    return this.slug;
  };
  Pokemon.prototype.component11 = function () {
    return this.weight;
  };
  Pokemon.prototype.copy_s1szem$ = function (ThumbnailAltText, ThumbnailImage, collectibles_slug, detailPageURL, featured, height, id, name, number, slug, weight) {
    return new Pokemon(ThumbnailAltText === void 0 ? this.ThumbnailAltText : ThumbnailAltText, ThumbnailImage === void 0 ? this.ThumbnailImage : ThumbnailImage, collectibles_slug === void 0 ? this.collectibles_slug : collectibles_slug, detailPageURL === void 0 ? this.detailPageURL : detailPageURL, featured === void 0 ? this.featured : featured, height === void 0 ? this.height : height, id === void 0 ? this.id : id, name === void 0 ? this.name : name, number === void 0 ? this.number : number, slug === void 0 ? this.slug : slug, weight === void 0 ? this.weight : weight);
  };
  Pokemon.prototype.toString = function () {
    return 'Pokemon(ThumbnailAltText=' + Kotlin.toString(this.ThumbnailAltText) + (', ThumbnailImage=' + Kotlin.toString(this.ThumbnailImage)) + (', collectibles_slug=' + Kotlin.toString(this.collectibles_slug)) + (', detailPageURL=' + Kotlin.toString(this.detailPageURL)) + (', featured=' + Kotlin.toString(this.featured)) + (', height=' + Kotlin.toString(this.height)) + (', id=' + Kotlin.toString(this.id)) + (', name=' + Kotlin.toString(this.name)) + (', number=' + Kotlin.toString(this.number)) + (', slug=' + Kotlin.toString(this.slug)) + (', weight=' + Kotlin.toString(this.weight)) + ')';
  };
  Pokemon.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ThumbnailAltText) | 0;
    result = result * 31 + Kotlin.hashCode(this.ThumbnailImage) | 0;
    result = result * 31 + Kotlin.hashCode(this.collectibles_slug) | 0;
    result = result * 31 + Kotlin.hashCode(this.detailPageURL) | 0;
    result = result * 31 + Kotlin.hashCode(this.featured) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.slug) | 0;
    result = result * 31 + Kotlin.hashCode(this.weight) | 0;
    return result;
  };
  Pokemon.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ThumbnailAltText, other.ThumbnailAltText) && Kotlin.equals(this.ThumbnailImage, other.ThumbnailImage) && Kotlin.equals(this.collectibles_slug, other.collectibles_slug) && Kotlin.equals(this.detailPageURL, other.detailPageURL) && Kotlin.equals(this.featured, other.featured) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.number, other.number) && Kotlin.equals(this.slug, other.slug) && Kotlin.equals(this.weight, other.weight)))));
  };
  function PokemonStoreContract() {
  }
  function PokemonStoreContract$View() {
  }
  PokemonStoreContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function PokemonStoreContract$Presenter() {
  }
  PokemonStoreContract$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  PokemonStoreContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PokemonStoreContract',
    interfaces: []
  };
  function PokemonStorePage(presenter) {
    this.presenter_0 = presenter;
    var tmp$, tmp$_0;
    this.loader_0 = Kotlin.isType(tmp$ = document.getElementById('loader'), HTMLDivElement) ? tmp$ : throwCCE();
    this.content_0 = Kotlin.isType(tmp$_0 = document.getElementById('content'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.cardBuilder_0 = new CardBuilder();
  }
  PokemonStorePage.prototype.showPokemons_zfszz2$ = function (pokemons) {
    var tmp$;
    tmp$ = pokemons.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var card = this.cardBuilder_0.build_kximr7$(element);
      this.content_0.appendChild(card);
    }
  };
  PokemonStorePage.prototype.showLoading = function () {
    this.loader_0.style.visibility = 'visible';
  };
  PokemonStorePage.prototype.hideLoading = function () {
    this.loader_0.style.visibility = 'hidden';
  };
  PokemonStorePage.prototype.show = function () {
    this.presenter_0.attach_75zopf$(this);
    this.presenter_0.loadPokemons();
  };
  PokemonStorePage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PokemonStorePage',
    interfaces: [PokemonStoreContract$View]
  };
  function PokemonStorePresenter() {
    this.view_a4fq1t$_0 = this.view_a4fq1t$_0;
  }
  Object.defineProperty(PokemonStorePresenter.prototype, 'view_0', {
    get: function () {
      if (this.view_a4fq1t$_0 == null)
        return throwUPAE('view');
      return this.view_a4fq1t$_0;
    },
    set: function (view) {
      this.view_a4fq1t$_0 = view;
    }
  });
  PokemonStorePresenter.prototype.attach_75zopf$ = function (view) {
    this.view_0 = view;
  };
  function PokemonStorePresenter$loadPokemons$lambda(this$PokemonStorePresenter) {
    return function (response) {
      var pokemons = JSON.parse(response);
      this$PokemonStorePresenter.view_0.hideLoading();
      this$PokemonStorePresenter.view_0.showPokemons_zfszz2$(toList(pokemons));
      var tmp$;
      for (tmp$ = 0; tmp$ !== pokemons.length; ++tmp$) {
        var element = pokemons[tmp$];
        println(element.name);
      }
      return Unit;
    };
  }
  PokemonStorePresenter.prototype.loadPokemons = function () {
    this.view_0.showLoading();
    this.getAsync_0(API_URL, PokemonStorePresenter$loadPokemons$lambda(this));
  };
  function PokemonStorePresenter$getAsync$lambda(closure$xmlHttp, closure$callback) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4) && closure$xmlHttp.status === toShort(200)) {
        closure$callback(closure$xmlHttp.responseText);
      } else {
        println(closure$xmlHttp.statusText);
      }
      return Unit;
    };
  }
  PokemonStorePresenter.prototype.getAsync_0 = function (url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);
    xmlHttp.onload = PokemonStorePresenter$getAsync$lambda(xmlHttp, callback);
    xmlHttp.send();
  };
  PokemonStorePresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PokemonStorePresenter',
    interfaces: [PokemonStoreContract$Presenter]
  };
  var API_URL;
  function main() {
    var pokemonStorePresenter = new PokemonStorePresenter();
    var pokemonStorePage = new PokemonStorePage(pokemonStorePresenter);
    pokemonStorePage.show();
  }
  _.CardBuilder = CardBuilder;
  _.Pokemon = Pokemon;
  PokemonStoreContract.View = PokemonStoreContract$View;
  PokemonStoreContract.Presenter = PokemonStoreContract$Presenter;
  _.PokemonStoreContract = PokemonStoreContract;
  _.PokemonStorePage = PokemonStorePage;
  _.PokemonStorePresenter = PokemonStorePresenter;
  Object.defineProperty(_, 'API_URL', {
    get: function () {
      return API_URL;
    }
  });
  _.main = main;
  var tmp$;
  API_URL = typeof (tmp$ = getApiUrl()) === 'string' ? tmp$ : throwCCE();
  main();
  Kotlin.defineModule('KotlinJsPokedex', _);
  return _;
}));

//# sourceMappingURL=KotlinJsPokedex.js.map
