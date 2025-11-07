(function () {
  var apex = 'sscc-cockpit.cz';
  var h = location.hostname.toLowerCase();

  // Přesměruj jen když jsme na www. a když doména odpovídá našemu webu
  if (h === 'www.' + apex) {
    var target = location.protocol + '//' + apex + location.pathname + location.search + location.hash;
    // replace = bez zápisu do historie (lepší pro SEO i UX)
    location.replace(target);
  }
})();
