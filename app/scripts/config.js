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
          description: 'tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk.',
          date: '2013-08-20',
          star_rating: 4
        },
        {
          user: {
            name: 'Jennie Loren',
            avatar: 'reviewer2.png'
          },
          title: 'Luv it so much I bought 2!',
          description: 'tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk.',
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