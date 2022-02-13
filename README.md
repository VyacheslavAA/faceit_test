#FACEIT test task

faceit_test is simple application for ios and android. The app was written with react-native, styled-components and redux/RTK query (These technologies were required by specification from interviewer).

Of course there are a lot of weakness in the code and I know about them, for example:

1. On Post screen there is http request to get a post. It would be better to check cache and if there is no the post then request it from server;
2. On Post screen there is Flatlist to render posts, but it would be better to use SectionList and use ListFooterComponent to show loader when we load more data (onEndReached);
3. Maybe in RTK query there is functional to merge result of request (something like apollo client merge functions) and in this case we no need to use "postStack" (src/screens/posts/Posts.tsx)
4. Would be cool to improve pagination logic and refresh logic to handle loading status and manage postStack more clearly.
5. And etc.

The user scenario: 
As a user, when I launch the app it directs me to the Feed view. The feed view has a scrollable list of 10
Posts. Each Post has an author and a body of content. Each author has an avatar and a name.
When I scroll to the top of the list and pull down, it will refresh - loading newer posts that have been
posted since I had the app open.
When I scroll to the bottom, it loads older posts.
When I select one of the Posts it goes to a new screen. This new screen has only that singular Post.
It will render in such a way to make it a more pleasant reading experience when compared to seeing it in
the feed. For example, it reveals the whole body in this view, whilst in the feed it only shows 100
characters of the body.
I should be able to navigate back to the Feed from the Post and as an added bonus, I&#39;m at the same
scroll position I was before.

###End