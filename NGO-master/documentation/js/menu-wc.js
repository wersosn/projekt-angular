'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ngo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/Akcja.html" data-type="entity-link" >Akcja</a>
                            </li>
                            <li class="link">
                                <a href="components/AkcjaAdministrator.html" data-type="entity-link" >AkcjaAdministrator</a>
                            </li>
                            <li class="link">
                                <a href="components/Akcje.html" data-type="entity-link" >Akcje</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogAkcji.html" data-type="entity-link" >BlogAkcji</a>
                            </li>
                            <li class="link">
                                <a href="components/DodajAkcje.html" data-type="entity-link" >DodajAkcje</a>
                            </li>
                            <li class="link">
                                <a href="components/DodajUczestnika.html" data-type="entity-link" >DodajUczestnika</a>
                            </li>
                            <li class="link">
                                <a href="components/EdytujAkcje.html" data-type="entity-link" >EdytujAkcje</a>
                            </li>
                            <li class="link">
                                <a href="components/Kalendarz.html" data-type="entity-link" >Kalendarz</a>
                            </li>
                            <li class="link">
                                <a href="components/Konto.html" data-type="entity-link" >Konto</a>
                            </li>
                            <li class="link">
                                <a href="components/ListaUczestnikow.html" data-type="entity-link" >ListaUczestnikow</a>
                            </li>
                            <li class="link">
                                <a href="components/Logowanie.html" data-type="entity-link" >Logowanie</a>
                            </li>
                            <li class="link">
                                <a href="components/Rejestracja.html" data-type="entity-link" >Rejestracja</a>
                            </li>
                            <li class="link">
                                <a href="components/StronaAkcji.html" data-type="entity-link" >StronaAkcji</a>
                            </li>
                            <li class="link">
                                <a href="components/SzukajUczestnika.html" data-type="entity-link" >SzukajUczestnika</a>
                            </li>
                            <li class="link">
                                <a href="components/UsunUczestnika.html" data-type="entity-link" >UsunUczestnika</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EventService.html" data-type="entity-link" >EventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserEventService.html" data-type="entity-link" >UserEventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});