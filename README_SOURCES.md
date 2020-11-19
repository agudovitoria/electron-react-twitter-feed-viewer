## Classes

<dl>
<dt><a href="#TwitterProvider">TwitterProvider</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#created_at">created_at</a></dt>
<dd><p>User created date</p>
</dd>
<dt><a href="#description">description</a></dt>
<dd><p>User description</p>
</dd>
<dt><a href="#id">id</a></dt>
<dd><p>User identifier</p>
</dd>
<dt><a href="#location">location</a></dt>
<dd><p>User location</p>
</dd>
<dt><a href="#name">name</a></dt>
<dd><p>User name</p>
</dd>
<dt><a href="#profile_image_url">profile_image_url</a></dt>
<dd><p>User profile image url</p>
</dd>
<dt><a href="#username">username</a></dt>
<dd><p>User username</p>
</dd>
<dt><a href="#verified">verified</a></dt>
<dd><p>User verified state</p>
</dd>
<dt><a href="#like_count">like_count</a></dt>
<dd><p>Tweet likes</p>
</dd>
<dt><a href="#quote_count">quote_count</a></dt>
<dd><p>Tweet quotes</p>
</dd>
<dt><a href="#reply_count">reply_count</a></dt>
<dd><p>Tweet replies</p>
</dd>
<dt><a href="#retweet_count">retweet_count</a></dt>
<dd><p>Tweet retweets</p>
</dd>
<dt><a href="#id">id</a></dt>
<dd><p>tweet identifier</p>
</dd>
<dt><a href="#text">text</a></dt>
<dd><p>tweet text</p>
</dd>
<dt><a href="#created_at">created_at</a></dt>
<dd><p>tweet creation date</p>
</dd>
<dt><a href="#public_metrics">public_metrics</a></dt>
<dd><p>tweet metrics</p>
</dd>
<dt><a href="#likes">likes</a></dt>
<dd><p>tweet likes</p>
</dd>
<dt><a href="#quotes">quotes</a></dt>
<dd><p>tweet quotes</p>
</dd>
<dt><a href="#replies">replies</a></dt>
<dd><p>tweet replies</p>
</dd>
<dt><a href="#retweets">retweets</a></dt>
<dd><p>tweet retweets</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#initialState">initialState</a> : <code>Object</code></dt>
<dd><p>Initial state to sotere in the context</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#App">App()</a></dt>
<dd><p>App root component</p>
</dd>
<dt><a href="#Error">Error()</a></dt>
<dd><p>Show error message for Twitter api response</p>
</dd>
<dt><a href="#InvalidUserAccount">InvalidUserAccount()</a></dt>
<dd><p>Show error message if user account is invalid</p>
</dd>
<dt><a href="#Likes">Likes()</a></dt>
<dd><p>Show tweet likes via Metric component</p>
</dd>
<dt><a href="#Loading">Loading()</a></dt>
<dd><p>Show loading spinner component</p>
</dd>
<dt><a href="#Message">Message(text)</a></dt>
<dd><p>Show message component</p>
</dd>
<dt><a href="#Metrics">Metrics(likes, quotes, replies, retweets)</a></dt>
<dd><p>Show tweet metrics component via Likes, Quotes, Replies and Retweets components</p>
</dd>
<dt><a href="#NavBar">NavBar()</a></dt>
<dd><p>Show app top navigation bar with user search component included</p>
</dd>
<dt><a href="#NotRecentTweets">NotRecentTweets()</a></dt>
<dd><p>Show error message if user has not recent tweets published</p>
</dd>
<dt><a href="#NotUser">NotUser()</a></dt>
<dd><p>Show error message if not user account is selected</p>
</dd>
<dt><a href="#Profile">Profile(user)</a></dt>
<dd><p>Show selected user info</p>
</dd>
<dt><a href="#Quotes">Quotes()</a></dt>
<dd><p>Show tweet quotes via Metric component</p>
</dd>
<dt><a href="#Replies">Replies()</a></dt>
<dd><p>Show tweet replies via Metric component</p>
</dd>
<dt><a href="#Retweets">Retweets()</a></dt>
<dd><p>Show tweet retweets via Metric component</p>
</dd>
<dt><a href="#Tweet">Tweet(tweet)</a></dt>
<dd><p>Show user tweet</p>
</dd>
<dt><a href="#TweetList">TweetList(tweets)</a></dt>
<dd><p>Show user tweets</p>
</dd>
<dt><a href="#UserSearch">UserSearch()</a></dt>
<dd><p>Show user search input &amp; button</p>
</dd>
<dt><a href="#useTwitterState">useTwitterState()</a> ⇒ <code>Object</code></dt>
<dd><p>Twitter context state access
Throws an error if is not defined properly</p>
</dd>
<dt><a href="#useTwitterDispatch">useTwitterDispatch()</a> ⇒ <code>Object</code></dt>
<dd><p>Twitter context dispatch access
Throws an error if is not defined properly</p>
</dd>
<dt><a href="#Tweets">Tweets(error, user, loading, tweets)</a></dt>
<dd><p>Show user tweets and messages if any error</p>
</dd>
</dl>

<a name="created_at"></a>

## created\_at
User created date

**Kind**: global variable  
<a name="description"></a>

## description
User description

**Kind**: global variable  
<a name="id"></a>

## id
User identifier

**Kind**: global variable  
<a name="location"></a>

## location
User location

**Kind**: global variable  
<a name="name"></a>

## name
User name

**Kind**: global variable  
<a name="profile_image_url"></a>

## profile\_image\_url
User profile image url

**Kind**: global variable  
<a name="username"></a>

## username
User username

**Kind**: global variable  
<a name="verified"></a>

## verified
User verified state

**Kind**: global variable  
<a name="like_count"></a>

## like\_count
Tweet likes

**Kind**: global variable  
<a name="quote_count"></a>

## quote\_count
Tweet quotes

**Kind**: global variable  
<a name="reply_count"></a>

## reply\_count
Tweet replies

**Kind**: global variable  
<a name="retweet_count"></a>

## retweet\_count
Tweet retweets

**Kind**: global variable  
<a name="id"></a>

## id
tweet identifier

**Kind**: global variable  
<a name="text"></a>

## text
tweet text

**Kind**: global variable  
<a name="created_at"></a>

## created\_at
tweet creation date

**Kind**: global variable  
<a name="public_metrics"></a>

## public\_metrics
tweet metrics

**Kind**: global variable  
<a name="likes"></a>

## likes
tweet likes

**Kind**: global variable  
<a name="quotes"></a>

## quotes
tweet quotes

**Kind**: global variable  
<a name="replies"></a>

## replies
tweet replies

**Kind**: global variable  
<a name="retweets"></a>

## retweets
tweet retweets

**Kind**: global variable  
<a name="initialState"></a>

## initialState : <code>Object</code>
Initial state to sotere in the context

**Kind**: global constant  
<a name="App"></a>

## App()
App root component

**Kind**: global function  
<a name="Error"></a>

## Error()
Show error message for Twitter api response

**Kind**: global function  
**Component**:   
<a name="InvalidUserAccount"></a>

## InvalidUserAccount()
Show error message if user account is invalid

**Kind**: global function  
**Component**:   
**See**: [Message](#Message) Message component  
<a name="Likes"></a>

## Likes()
Show tweet likes via Metric component

**Kind**: global function  
**Component**:   
**Link**: Metric  
**Example**  
```js
const count=100
return (
  <Likes count={count} />
)
```
<a name="Loading"></a>

## Loading()
Show loading spinner component

**Kind**: global function  
**Component**:   
<a name="Message"></a>

## Message(text)
Show message component

**Kind**: global function  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | to show |

<a name="Metrics"></a>

## Metrics(likes, quotes, replies, retweets)
Show tweet metrics component via Likes, Quotes, Replies and Retweets components

**Kind**: global function  
**Component**:   
**See**

- [Likes](#Likes)
- [Quotes](#Quotes)
- [Replies{](Replies{)
- [Retweets](#Retweets)


| Param | Type | Description |
| --- | --- | --- |
| likes | <code>number</code> | tweet likes |
| quotes | <code>number</code> | tweet quotes |
| replies | <code>number</code> | tweet replies |
| retweets | <code>number</code> | tweet retweets |

<a name="NavBar"></a>

## NavBar()
Show app top navigation bar with user search component included

**Kind**: global function  
**Component**:   
**Link**: UserSearch  
<a name="NotRecentTweets"></a>

## NotRecentTweets()
Show error message if user has not recent tweets published

**Kind**: global function  
**Component**:   
**See**: [Message](#Message) Message component  
<a name="NotUser"></a>

## NotUser()
Show error message if not user account is selected

**Kind**: global function  
**Component**:   
**See**: [Message](#Message) Message component  
<a name="Profile"></a>

## Profile(user)
Show selected user info

**Kind**: global function  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | User info |

<a name="Quotes"></a>

## Quotes()
Show tweet quotes via Metric component

**Kind**: global function  
**Component**:   
**Link**: Metric  
**Example**  
```js
const count=100
return (
  <Quotes count={count} />
)
```
<a name="Replies"></a>

## Replies()
Show tweet replies via Metric component

**Kind**: global function  
**Component**:   
**Link**: Metric  
**Example**  
```js
const count=100
return (
  <Replies count={count} />
)
```
<a name="Retweets"></a>

## Retweets()
Show tweet retweets via Metric component

**Kind**: global function  
**Component**:   
**Link**: Metric  
**Example**  
```js
const count=100
return (
  <Retweets count={count} />
)
```
<a name="Tweet"></a>

## Tweet(tweet)
Show user tweet

**Kind**: global function  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| tweet | <code>Object</code> | User tweet |
| tweet.text | <code>string</code> | Tweet text |
| tweet.created_at | <code>Date</code> | Tweet creation date |
| tweet.public_metrics | <code>Object</code> | Tweet public metrics |
| tweet.public_metrics.likes | <code>number</code> | Tweet likes |
| tweet.public_metrics.quotes | <code>number</code> | Tweet quotes |
| tweet.public_metrics.replies | <code>number</code> | Tweet replies |
| tweet.public_metrics.retweets | <code>number</code> | Tweet retweets |

<a name="TweetList"></a>

## TweetList(tweets)
Show user tweets

**Kind**: global function  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| tweets | <code>array</code> | user tweets |

<a name="UserSearch"></a>

## UserSearch()
Show user search input & button

**Kind**: global function  
**Component**:   

* [UserSearch()](#UserSearch)
    * [~inputProps](#UserSearch..inputProps) : <code>Object</code>
    * [~isEnterKey()](#UserSearch..isEnterKey)
    * [~inputCriteriaIsTooLong()](#UserSearch..inputCriteriaIsTooLong)
    * [~onChange(value)](#UserSearch..onChange)
    * [~searchUser()](#UserSearch..searchUser)
    * [~onClick()](#UserSearch..onClick)
    * [~onKeyPress(keyCode)](#UserSearch..onKeyPress)

<a name="UserSearch..inputProps"></a>

### UserSearch~inputProps : <code>Object</code>
Input identifier for test purposes

**Kind**: inner constant of [<code>UserSearch</code>](#UserSearch)  
<a name="UserSearch..isEnterKey"></a>

### UserSearch~isEnterKey()
Returns if pressed key is 'Enter'

**Kind**: inner method of [<code>UserSearch</code>](#UserSearch)  
<a name="UserSearch..inputCriteriaIsTooLong"></a>

### UserSearch~inputCriteriaIsTooLong()
Returns if input value is too long for Twitter username field

**Kind**: inner method of [<code>UserSearch</code>](#UserSearch)  
<a name="UserSearch..onChange"></a>

### UserSearch~onChange(value)
Function executed when input value changes

**Kind**: inner method of [<code>UserSearch</code>](#UserSearch)  

| Param | Description |
| --- | --- |
| value | Text entered on input |

<a name="UserSearch..searchUser"></a>

### UserSearch~searchUser()
Call to TwitterApi facade when load user info

**Kind**: inner method of [<code>UserSearch</code>](#UserSearch)  
<a name="UserSearch..onClick"></a>

### UserSearch~onClick()
Search user when button is clicked

**Kind**: inner method of [<code>UserSearch</code>](#UserSearch)  
<a name="UserSearch..onKeyPress"></a>

### UserSearch~onKeyPress(keyCode)
Executed when every key is pressed on text input.
If key is 'Enter' search user like if button were clicked

**Kind**: inner method of [<code>UserSearch</code>](#UserSearch)  

| Param | Description |
| --- | --- |
| keyCode | Pressed key code. (Filters for only use enter key) |

<a name="useTwitterState"></a>

## useTwitterState() ⇒ <code>Object</code>
Twitter context state access
Throws an error if is not defined properly

**Kind**: global function  
<a name="useTwitterDispatch"></a>

## useTwitterDispatch() ⇒ <code>Object</code>
Twitter context dispatch access
Throws an error if is not defined properly

**Kind**: global function  
<a name="Tweets"></a>

## Tweets(error, user, loading, tweets)
Show user tweets and messages if any error

**Kind**: global function  
**Category**: Pages  
**Component**:   
**See**

- [InvalidUserAccount](#InvalidUserAccount)
- [Loading](#Loading)
- [Profile](#Profile)
- [NotUser](#NotUser)
- [TweetList](#TweetList)
- [Profile](#Profile)


| Param | Type | Description |
| --- | --- | --- |
| error | <code>Object</code> | Error info if has any |
| user | <code>Object</code> | User info for profile component |
| loading | <code>boolean</code> | Application loading state |
| tweets | <code>array</code> | User tweets |

<a name="TwitterProvider"></a>

## TwitterProvider
**Kind**: global class  
**Category**: providers  
<a name="new_TwitterProvider_new"></a>

### new TwitterProvider(children)
Twitter context provider

**Returns**: <code>JSX.Element</code> - - Children components with access to provider included  

| Param | Description |
| --- | --- |
| children | Children components with Twitter provider access to render |

