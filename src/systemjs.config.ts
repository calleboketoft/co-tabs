declare var System
System.config({
  baseURL: '/',
  warnings: true,
  map: {
    'angular2': 'node_modules/angular2',
    'rxjs': 'node_modules/rxjs'
  },
  packages: {
    'src': {
      defaultExtension: 'js'
    },
    'angular2': {
      defaultExtension: 'js'
    },
    'rxjs': {
      defaultExtension: 'js'
    }
  }
})