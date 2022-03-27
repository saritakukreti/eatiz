
    // Packshot ------------
		$('.food-owl-carousel').owlCarousel({
			loop: true,
			margin: 0,
			dots: false,
			nav:true,
			navText: ["<img src='assets/images/home/back-arrow.png'>","<img src='assets/images/home/next-arrow.png'>"],
			animateOut: 'zoomOut',
			animateIn: 'zoomIn',
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
        })
        
	