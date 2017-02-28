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
          description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
          date: '2013-08-20',
          star_rating: 4
        },
        {
          user: {
            name: 'Jennie Loren',
            avatar: 'reviewer2.png'
          },
          title: 'Luv it so much I bought 2!',
          description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
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