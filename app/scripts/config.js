define([
],
function() {
  return {
    events: {
      createReview: 'review:create',
      editReview: 'review:edit',
      submitReview: 'review:submit'
    },
    templates: {
      layout: 'app/templates/layout.hbs',
      modal: 'app/templates/modal.hbs',
      review: 'app/templates/review.hbs',
      reviewModalBody: 'app/templates/reviewModalBody.hbs',
      reviewModalFooter: 'app/templates/reviewModalFooter.hbs'
    },
    reviewData: {
      '_1': [
        {
          user: {
            name: 'Shaun White',
            avatar: 'reviewer1.png'
          },
          title: 'This thing is a monster!',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies justo sed vulputate viverra. Quisque magna mauris, auctor eu nisl quis, volutpat iaculis leo. Phasellus blandit mi elementum nisi congue mattis. Praesent turpis eros, sollicitudin dignissim imperdiet vel, eleifend ut risus. Aenean molestie purus suscipit semper feugiat. Maecenas aliquam enim id tempus dapibus. Praesent suscipit nisi nibh, vel accumsan neque mollis sed. Vestibulum luctus sed lectus ut pulvinar. Aenean tincidunt gravida bibendum. Nunc sapien leo, rutrum et purus vitae, pulvinar luctus mi. Vivamus bibendum vitae ipsum nec pharetra. Nullam at metus luctus, laoreet tellus eget, molestie enim. Praesent pharetra luctus felis, tincidunt malesuada justo dictum id. Quisque nisl lacus, pellentesque non lectus mollis, mollis semper ex. Phasellus congue ante id nunc maximus mattis. Mauris nec massa semper, viverra elit et, vehicula mauris. Vivamus nec placerat nisl, eu mollis turpis. Duis venenatis ornare lacus, eu interdum tellus porta ut. Sed fermentum viverra nulla, sit amet pellentesque elit posuere id. Quisque ut arcu vel leo pretium sagittis. Nam ut interdum neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin non neque ut nibh vulputate mollis. Integer mollis arcu in arcu feugiat, ac tempor turpis porta. Fusce.',
          date: '2013-08-20',
          star_rating: 4
        },
        {
          user: {
            name: 'Jennie Loren',
            avatar: 'reviewer2.png'
          },
          title: 'Luv it so much I bought 2!',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum congue massa, consectetur venenatis est faucibus vel. Aenean finibus libero et orci tincidunt imperdiet. Phasellus dignissim ipsum eleifend, ornare arcu ut, imperdiet velit. Praesent diam lorem, feugiat a varius quis, viverra eu felis. Nam sem dui, egestas non congue eu, euismod in tortor. Nunc pellentesque, felis id cursus pharetra, libero sapien dignissim odio, et facilisis dui nulla eu ligula. Sed ex lectus, sollicitudin id pellentesque nec, pretium eget velit. Nullam accumsan, eros ac scelerisque accumsan, lectus urna volutpat lorem, vitae aliquam quam neque vel urna. Nunc condimentum orci quis sapien.',
          date: '2013-01-12',
          star_rating: 3
        }
      ],
      '_2': {
        user: {
          name: 'A. User',
          avatar: 'reviewer-placeholder.png'
        },
        date: new Date()
      }
    }
  };
});