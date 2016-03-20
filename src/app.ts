import {bootstrap} from 'angular2/platform/browser';
import {Ng2CliTranslateApp} from './app/ng2-cli-translate';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';


bootstrap(Ng2CliTranslateApp, [
	ROUTER_PROVIDERS,
	TRANSLATE_PROVIDERS
]);
