
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog_entries').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('blog_entries')
        .insert({title: 'Entry 1',
          imageUrl: 'http://placehold.it/125x125',
          date: '2012-01-01',
          body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus felis odio, id luctus velit pulvinar quis. Mauris eros turpis, convallis condimentum lorem quis, consequat gravida augue. Nulla ultrices pharetra enim, sed dignissim elit aliquam sed. Quisque libero lacus, suscipit ac lectus in, placerat iaculis sem. Donec lorem dolor, maximus non scelerisque ac, eleifend at orci. Vivamus diam erat, condimentum et scelerisque ac, tincidunt vitae orci. Suspendisse condimentum lorem lorem, et varius lorem viverra quis. Vestibulum purus dolor, ullamcorper sed dapibus quis, mollis pulvinar orci. Aliquam convallis rhoncus ipsum, nec bibendum sapien interdum vitae. Nullam tellus augue, mattis ut bibendum nec, egestas quis sapien.'}),

      knex('blog_entries')
       .insert({title: 'Entry 2',
          imageUrl: 'http://placehold.it/125x125',
          date: '2017-02-18',
          body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus felis odio, id luctus velit pulvinar quis. Mauris eros turpis, convallis condimentum lorem quis, consequat gravida augue. Nulla ultrices pharetra enim, sed dignissim elit aliquam sed. Quisque libero lacus, suscipit ac lectus in, placerat iaculis sem. Donec lorem dolor, maximus non scelerisque ac, eleifend at orci. Vivamus diam erat, condimentum et scelerisque ac, tincidunt vitae orci. Suspendisse condimentum lorem lorem, et varius lorem viverra quis. Vestibulum purus dolor, ullamcorper sed dapibus quis, mollis pulvinar orci. Aliquam convallis rhoncus ipsum, nec bibendum sapien interdum vitae. Nullam tellus augue, mattis ut bibendum nec, egestas quis sapien.'}),


      knex('blog_entries')
        .insert({title: 'Entry 3',
           imageUrl: 'http://placehold.it/125x125',
           date: '2012-10-31',
           body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus felis odio, id luctus velit pulvinar quis. Mauris eros turpis, convallis condimentum lorem quis, consequat gravida augue. Nulla ultrices pharetra enim, sed dignissim elit aliquam sed. Quisque libero lacus, suscipit ac lectus in, placerat iaculis sem. Donec lorem dolor, maximus non scelerisque ac, eleifend at orci. Vivamus diam erat, condimentum et scelerisque ac, tincidunt vitae orci. Suspendisse condimentum lorem lorem, et varius lorem viverra quis. Vestibulum purus dolor, ullamcorper sed dapibus quis, mollis pulvinar orci. Aliquam convallis rhoncus ipsum, nec bibendum sapien interdum vitae. Nullam tellus augue, mattis ut bibendum nec, egestas quis sapien.'}),


      ]);
    });
};
