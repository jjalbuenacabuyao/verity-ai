## Constants

<dl>
<dt><a href="#handler">handler</a> ⇒ <code>NextAuth</code></dt>
<dd><p>The NextAuth handler.</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#POST">POST(request)</a> ⇒ <code>Promise.&lt;object&gt;</code></dt>
<dd><p>Handles a POST request to update the password of a user in the database.</p></dd>
<dt><a href="#POST">POST(request)</a> ⇒ <code>Promise.&lt;NextResponse&gt;</code></dt>
<dd><p>Handles a POST request to update the role of a user in a database using the Prisma ORM.</p></dd>
<dt><a href="#POST">POST(request)</a> ⇒ <code>Promise.&lt;NextResponse&gt;</code></dt>
<dd><p>Handles a POST request to delete a user from the database.</p></dd>
<dt><a href="#POST">POST(request)</a> ⇒ <code>Promise.&lt;Response&gt;</code></dt>
<dd><p>Handles a POST request and processes the extracted text.</p></dd>
<dt><a href="#POST">POST(request)</a> ⇒ <code>Promise.&lt;Response&gt;</code></dt>
<dd><p>Handles a POST request to create a new user in the database.</p></dd>
<dt><a href="#GET">GET(req)</a> ⇒ <code>Promise.&lt;NextResponse&gt;</code></dt>
<dd><p>Retrieves users from a database based on search criteria and pagination.</p></dd>
<dt><a href="#Dashboard">Dashboard()</a> ⇒ <code>Promise.&lt;JSX.Element&gt;</code></dt>
<dd><p>Renders the dashboard page.</p>
<p>Retrieves the current user and the total number of users from the database. If the current user is not an admin, it renders the <code>AccessDenied</code> component. Otherwise, it renders the <code>DashboardContents</code> component with the total number of users passed as a prop.</p></dd>
<dt><a href="#Detector">Detector()</a> ⇒ <code>React.JSX.Element</code></dt>
<dd><p>Renders the detector page.</p>
<p>React component that checks if the user is logged in and renders the AccessDenied component if not.
It consists of an <code>Aside</code> component for file upload and a <code>ResultContainer</code> component for displaying
the detection results.</p></dd>
<dt><a href="#RootLayout">RootLayout(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>RootLayout is the root layout of the web application.</p></dd>
<dt><a href="#Page">Page()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders the homepage.</p></dd>
<dt><a href="#FAQ">FAQ()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a list of frequently asked questions and answers.</p></dd>
<dt><a href="#FaqAccordion">FaqAccordion()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders an accordion component with a list of questions and answers.</p></dd>
<dt><a href="#FeatureCard">FeatureCard(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a card with a title, description, and an icon.
Uses the <code>motion</code> library from Framer Motion for animations.</p></dd>
<dt><a href="#Features">Features()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a section with a list of features.
Each feature is represented by a <code>FeatureCard</code> component, which displays an icon, title, and description.</p></dd>
<dt><a href="#Hero">Hero()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a Hero component that displays a heading, description, button, and an illustration.
The component also includes a modal for logging in.</p></dd>
<dt><a href="#HeroIllustration">HeroIllustration()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a hero illustration with images, avatars, circular progress bars, and a button.</p></dd>
<dt><a href="#InstructionList">InstructionList(data)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders an ordered list with instructions and images.</p></dd>
<dt><a href="#Subheading">Subheading(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a subheading with a specified title.</p></dd>
<dt><a href="#Tutorials">Tutorials()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a tutorial section with two tabs: one for a video tutorial and another for step-by-step instructions.
The component uses the <code>Tabs</code> and <code>Tab</code> components from the <code>@nextui-org/tabs</code> library to handle the tab functionality.
The selected tab is stored in the component's state using the <code>useState</code> hook.
The component also includes two sub-components: <code>Subheading</code> and <code>InstructionList</code>, which are responsible for rendering the headings and the list of instructions, respectively.</p></dd>
<dt><a href="#TutorialsHeading">TutorialsHeading(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders an <code>&lt;h3&gt;</code> element with a dynamic class name based on the <code>secondary</code> prop value.</p></dd>
<dt><a href="#AccessDenied">AccessDenied()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a page for displaying an access denied message.</p></dd>
<dt><a href="#DetectionErrorToast">DetectionErrorToast(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>A component that renders a toast notification for displaying an error message.</p></dd>
<dt><a href="#EmailAlreadyExistToast">EmailAlreadyExistToast(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a toast notification when an email address already exists in the system.</p></dd>
<dt><a href="#FileLimitExceededToast">FileLimitExceededToast(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a toast notification when the file upload limit is exceeded.
The toast notification includes a message and a close button.</p></dd>
<dt><a href="#Header">Header()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Represents the header section of a website that contains the logo, links, button and user menu.</p></dd>
<dt><a href="#LogInButton">LogInButton()</a> ⇒</dt>
<dd><p>Renders a button with the label &quot;Log in&quot;. When the button is clicked, it opens a modal window for user login.</p></dd>
<dt><a href="#LogInModal">LogInModal(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a modal window with email and password input for user login.</p></dd>
<dt><a href="#Logo">Logo()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a logo image and text inside a <code>NavbarBrand</code> component.
The logo image is wrapped in a <code>Link</code> component that navigates to the home page when clicked.</p></dd>
<dt><a href="#LogOutButton">LogOutButton()</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a button component for logging out.
When the button is clicked, it calls the <code>signOut</code> function with a callback URL of &quot;/&quot;.</p></dd>
<dt><a href="#UserAddedToast">UserAddedToast(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a toast notification when a user is successfully added.</p></dd>
<dt><a href="#UserMenu">UserMenu(currentUser)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Renders a dropdown menu for the user, allowing them to view their profile information, change their password, and log out.</p></dd>
<dt><a href="#countWords">countWords(text)</a> ⇒</dt>
<dd><p>Counts the number of words in a given string. The function trims the input text to remove leading and trailing whitespace, replaces line breaks with spaces, replace two or more spaces with a single space, splits the text into an array of words, and then filters out empty strings. Finally, it returns the count of non-empty words in the text.</p></dd>
<dt><a href="#createDetectionReportDocx">createDetectionReportDocx(data)</a> ⇒ <code>object</code></dt>
<dd><p>Generates a Word document (docx) based on a given array of <code>ResultWithFilename</code> objects.
The function creates a table in the document with headers and rows representing the detection results.
It also handles different types of result texts, including strings and objects, and generates inner tables for object texts.</p></dd>
<dt><a href="#detectAiGeneratedText">detectAiGeneratedText(text)</a> ⇒</dt>
<dd><p>Detects if the given text is AI-generated or not using the Hugging Face Inference API.</p></dd>
<dt><a href="#filterSentences">filterSentences(extractedText)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>The function takes in a string, normalizes it, splits it into sentences, groups them into segments of 8, and returns an array of the segments.</p></dd>
<dt><a href="#getSentencePercentage">getSentencePercentage(text, totalCharacters)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the percentage of sentence characters in relation to the total number of characters in a given text.</p></dd>
<dt><a href="#getTextFromFiles">getTextFromFiles(file)</a> ⇒ <code>string</code></dt>
<dd><p>Extracts text from either a PDF or a DOCX file.</p></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#AuthOptions">AuthOptions</a> : <code>Object</code></dt>
<dd><p>Configuration options for NextAuth.</p></dd>
</dl>

<a name="handler"></a>

## handler ⇒ <code>NextAuth</code>
<p>The NextAuth handler.</p>

**Kind**: global constant  
**Returns**: <code>NextAuth</code> - <p>The NextAuth instance.</p>  
<a name="POST"></a>

## POST(request) ⇒ <code>Promise.&lt;object&gt;</code>
<p>Handles a POST request to update the password of a user in the database.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;object&gt;</code> - <ul>
<li>An object indicating the success or failure of the password update.</li>
</ul>  
**Throws**:

- <code>Error</code> <ul>
<li>If there is an error retrieving or updating the user's password.</li>
</ul>


| Param | Type | Description |
| --- | --- | --- |
| request | <code>Request</code> | <p>The HTTP request object containing the user's email, current password, and new password.</p> |

<a name="POST"></a>

## changerole -> POST(request) ⇒ <code>Promise.&lt;NextResponse&gt;</code>
<p>Handles a POST request to update the role of a user in a database using the Prisma ORM.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;NextResponse&gt;</code> - <p>A JSON response object indicating the success of the operation.</p>  

| Param | Description |
| --- | --- |
| request | <p>The HTTP request object containing the user's data.</p> |

<a name="POST"></a>

## delete -> POST(request) ⇒ <code>Promise.&lt;NextResponse&gt;</code>
<p>Handles a POST request to delete a user from the database.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;NextResponse&gt;</code> - <p>A JSON response indicating success.</p>  

| Param | Description |
| --- | --- |
| request | <p>The request object containing the JSON payload with the user ID.</p> |

<a name="POST"></a>

## detectaitext -> POST(request) ⇒ <code>Promise.&lt;Response&gt;</code>
<p>Handles a POST request and processes the extracted text.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;Response&gt;</code> - <ul>
<li>A promise that resolves to a response with the AI-generated percentage and the texts with their scores and labels.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>Request</code> | <p>The POST request object containing a JSON payload with an <code>extractedText</code> property.</p> |

<a name="POST"></a>

## register -> POST(request) ⇒ <code>Promise.&lt;Response&gt;</code>
<p>Handles a POST request to create a new user in the database.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;Response&gt;</code> - <p>The created user object as a JSON response.</p>  
**Throws**:

- <code>Error</code> <p>If a user with the same email already exists in the database.</p>


| Param | Type | Description |
| --- | --- | --- |
| request | <code>Request</code> | <p>The HTTP request object containing the user data in the request body.</p> |

<a name="GET"></a>

## users -> GET(req) ⇒ <code>Promise.&lt;NextResponse&gt;</code>
<p>Retrieves users from a database based on search criteria and pagination.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;NextResponse&gt;</code> - <p>A JSON response containing either the search results or the paginated users from the database.</p>  

| Param | Description |
| --- | --- |
| req | <p>The HTTP request object containing the URL with query parameters for pagination (<code>page</code>) and search criteria (<code>search</code>).</p> |

<a name="Dashboard"></a>

## Dashboard() ⇒ <code>Promise.&lt;JSX.Element&gt;</code>
<p>Renders the dashboard page.</p>
<p>Retrieves the current user and the total number of users from the database. If the current user is not an admin, it renders the <code>AccessDenied</code> component. Otherwise, it renders the <code>DashboardContents</code> component with the total number of users passed as a prop.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;JSX.Element&gt;</code> - <p>JSX elements representing the dashboard page.</p>  
<a name="Detector"></a>

## Detector() ⇒ <code>React.JSX.Element</code>
<p>Renders the detector page.</p>
<p>React component that checks if the user is logged in and renders the AccessDenied component if not.
It consists of an <code>Aside</code> component for file upload and a <code>ResultContainer</code> component for displaying
the detection results.</p>

**Kind**: global function  
**Returns**: <code>React.JSX.Element</code> - <p>The rendered component based on the user's authentication status.</p>  
<a name="RootLayout"></a>

## RootLayout(props) ⇒ <code>JSX.Element</code>
<p>RootLayout is the root layout of the web application.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered RootLayout component.</p>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | <p>The properties that define the RootLayout component.</p> |
| props.children | <code>React.ReactNode</code> | <p>The child elements of the RootLayout component.</p> |

<a name="Page"></a>

## Page() ⇒ <code>JSX.Element</code>
<p>Renders the homepage.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered component.</p>  
<a name="FAQ"></a>

## FAQ() ⇒ <code>JSX.Element</code>
<p>Renders a list of frequently asked questions and answers.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered FAQ component.</p>  
<a name="FaqAccordion"></a>

## FaqAccordion() ⇒ <code>JSX.Element</code>
<p>Renders an accordion component with a list of questions and answers.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered accordion component.</p>  
<a name="FeatureCard"></a>

## FeatureCard(props) ⇒ <code>JSX.Element</code>
<p>Renders a card with a title, description, and an icon.
Uses the <code>motion</code> library from Framer Motion for animations.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <ul>
<li>The rendered card component.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | <p>The component props.</p> |
| props.title | <code>string</code> | <p>The title of the card.</p> |
| props.description | <code>string</code> | <p>The description of the card.</p> |
| props.icon | <code>React.ReactNode</code> | <p>The icon to be displayed on the card.</p> |

<a name="Features"></a>

## Features() ⇒ <code>JSX.Element</code>
<p>Renders a section with a list of features.
Each feature is represented by a <code>FeatureCard</code> component, which displays an icon, title, and description.</p>

**Kind**: global function  
<a name="Hero"></a>

## Hero() ⇒ <code>JSX.Element</code>
<p>Renders a Hero component that displays a heading, description, button, and an illustration.
The component also includes a modal for logging in.</p>

**Kind**: global function  
<a name="HeroIllustration"></a>

## HeroIllustration() ⇒ <code>JSX.Element</code>
<p>Renders a hero illustration with images, avatars, circular progress bars, and a button.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>representing the hero illustration.</p>  
<a name="InstructionList"></a>

## InstructionList(data) ⇒ <code>JSX.Element</code>
<p>Renders an ordered list with instructions and images.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered ordered list with instructions and images.</p>  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;Object&gt;</code> | <p>An array of objects containing the instructions and image details.</p> |
| data[].instruction | <code>React.ReactNode</code> | <p>The instruction to be displayed.</p> |
| data[].imgSource | <code>string</code> | <p>The source URL of the image.</p> |
| data[].altText | <code>string</code> | <p>The alternative text for the image.</p> |

<a name="Subheading"></a>

## Subheading(props) ⇒ <code>JSX.Element</code>
<p>Renders a subheading with a specified title.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The subheading with the specified title.</p>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | <p>The component props.</p> |
| props.title | <code>string</code> | <p>The title to be displayed in the subheading.</p> |

<a name="Tutorials"></a>

## Tutorials() ⇒ <code>JSX.Element</code>
<p>Renders a tutorial section with two tabs: one for a video tutorial and another for step-by-step instructions.
The component uses the <code>Tabs</code> and <code>Tab</code> components from the <code>@nextui-org/tabs</code> library to handle the tab functionality.
The selected tab is stored in the component's state using the <code>useState</code> hook.
The component also includes two sub-components: <code>Subheading</code> and <code>InstructionList</code>, which are responsible for rendering the headings and the list of instructions, respectively.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered tutorial section with two tabs.</p>  
<a name="TutorialsHeading"></a>

## TutorialsHeading(props) ⇒ <code>JSX.Element</code>
<p>Renders an <code>&lt;h3&gt;</code> element with a dynamic class name based on the <code>secondary</code> prop value.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered <code>&lt;h3&gt;</code> element.</p>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | <p>The component props.</p> |
| props.title | <code>string</code> | <p>The main title to be displayed in the heading.</p> |
| [props.secondary] | <code>boolean</code> | <p>Determines whether the heading should have a secondary style.</p> |

<a name="AccessDenied"></a>

## AccessDenied() ⇒ <code>JSX.Element</code>
<p>Renders a page for displaying an access denied message.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <ul>
<li>The rendered access denied page with an image, a heading, a paragraph, a login button, and a button to navigate back to the homepage.</li>
</ul>  
<a name="DetectionErrorToast"></a>

## DetectionErrorToast(props) ⇒ <code>JSX.Element</code>
<p>A component that renders a toast notification for displaying an error message.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <ul>
<li>The rendered component.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | <p>The component props.</p> |
| props.filename | <code>string</code> | <p>The name of the file that caused the error.</p> |
| props.isOpen | <code>boolean</code> | <p>A state variable indicating whether the toast notification is open or closed.</p> |
| props.setIsOpen | <code>function</code> | <p>A state setter function to update the <code>isOpen</code> state variable.</p> |

<a name="EmailAlreadyExistToast"></a>

## EmailAlreadyExistToast(props) ⇒ <code>JSX.Element</code>
<p>Renders a toast notification when an email address already exists in the system.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered toast notification.</p>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | <p>The component props.</p> |
| props.isError | <code>boolean</code> | <p>A flag indicating whether an error has occurred.</p> |
| props.setIsError | <code>function</code> | <p>A function to update the <code>isError</code> flag.</p> |

<a name="FileLimitExceededToast"></a>

## FileLimitExceededToast(props) ⇒ <code>JSX.Element</code>
<p>Renders a toast notification when the file upload limit is exceeded.
The toast notification includes a message and a close button.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered component.</p>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | <p>The component props.</p> |
| props.isOpen | <code>boolean</code> | <p>Determines whether the toast notification is open or closed.</p> |
| props.setIsOpen | <code>function</code> | <p>Updates the value of <code>isOpen</code>.</p> |

<a name="Header"></a>

## Header() ⇒ <code>JSX.Element</code>
<p>Represents the header section of a website that contains the logo, links, button and user menu.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered header component.</p>  
<a name="LogInButton"></a>

## LogInButton() ⇒
<p>Renders a button with the label &quot;Log in&quot;. When the button is clicked, it opens a modal window for user login.</p>

**Kind**: global function  
**Returns**: <p>The rendered LogInButton component.</p>  
<a name="LogInModal"></a>

## LogInModal(props) ⇒ <code>JSX.Element</code>
<p>Renders a modal window with email and password input for user login.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered component.</p>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | <p>The component props.</p> |
| props.isOpen | <code>boolean</code> | <p>Indicates whether the login modal is open or closed.</p> |
| props.onOpenChange | <code>function</code> | <p>Callback function to handle the open/close state change of the modal.</p> |
| props.onClose | <code>function</code> | <p>Callback function to handle the close event of the modal.</p> |

<a name="Logo"></a>

## Logo() ⇒ <code>JSX.Element</code>
<p>Renders a logo image and text inside a <code>NavbarBrand</code> component.
The logo image is wrapped in a <code>Link</code> component that navigates to the home page when clicked.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered logo component.</p>  
<a name="LogOutButton"></a>

## LogOutButton() ⇒ <code>JSX.Element</code>
<p>Renders a button component for logging out.
When the button is clicked, it calls the <code>signOut</code> function with a callback URL of &quot;/&quot;.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered button component.</p>  
<a name="UserAddedToast"></a>

## UserAddedToast(props) ⇒ <code>JSX.Element</code>
<p>Renders a toast notification when a user is successfully added.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered component.</p>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | <p>The component props.</p> |
| props.userAdded | <code>boolean</code> | <p>Indicates whether a user has been added.</p> |
| props.setUserAdded | <code>function</code> | <p>A state setter function to update the <code>userAdded</code> state.</p> |

<a name="UserMenu"></a>

## UserMenu(currentUser) ⇒ <code>JSX.Element</code>
<p>Renders a dropdown menu for the user, allowing them to view their profile information, change their password, and log out.</p>

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - <p>The rendered dropdown menu with user information and options.</p>  

| Param | Type | Description |
| --- | --- | --- |
| currentUser | <code>Object</code> | <p>The current user object containing the user's name, email, and role.</p> |

<a name="countWords"></a>

## countWords(text) ⇒
<p>Counts the number of words in a given string. The function trims the input text to remove leading and trailing whitespace, replaces line breaks with spaces, replace two or more spaces with a single space, splits the text into an array of words, and then filters out empty strings. Finally, it returns the count of non-empty words in the text.</p>

**Kind**: global function  
**Returns**: <p>the number of words in the input text string.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>The input text for which the number of words needs to be counted.</p> |

<a name="createDetectionReportDocx"></a>

## createDetectionReportDocx(data) ⇒ <code>object</code>
<p>Generates a Word document (docx) based on a given array of <code>ResultWithFilename</code> objects.
The function creates a table in the document with headers and rows representing the detection results.
It also handles different types of result texts, including strings and objects, and generates inner tables for object texts.</p>

**Kind**: global function  
**Returns**: <code>object</code> - <ul>
<li>A Document object representing the generated Word document.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;ResultWithFilename&gt;</code> | <p>An array of <code>ResultWithFilename</code> objects containing the detection results. Each object has a <code>filename</code> (string) and a <code>result</code> (object) property. The <code>result</code> object has properties <code>aiGeneratedPercentage</code> (number) and <code>texts</code> (string or array of objects).</p> |

<a name="detectAiGeneratedText"></a>

## detectAiGeneratedText(text) ⇒
<p>Detects if the given text is AI-generated or not using the Hugging Face Inference API.</p>

**Kind**: global function  
**Returns**: <p>An object containing the label and score of the text classification result.</p>  

| Param | Description |
| --- | --- |
| text | <p>The input text to be classified.</p> |

**Example**  
```js
const text = "This is a sample text.";
const result = await detectAiGeneratedText(text);
console.log(result);
// Output: { label: "AI-generated", score: 99 }
```
<a name="filterSentences"></a>

## filterSentences(extractedText) ⇒ <code>Array.&lt;string&gt;</code>
<p>The function takes in a string, normalizes it, splits it into sentences, groups them into segments of 8, and returns an array of the segments.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - <ul>
<li>An array of strings, where each string is a concatenation of 8 sentences from the input string.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| extractedText | <code>string</code> | <p>The input string that needs to be processed and split into segments.</p> |

<a name="getSentencePercentage"></a>

## getSentencePercentage(text, totalCharacters) ⇒ <code>number</code>
<p>Calculates the percentage of sentence characters in relation to the total number of characters in a given text.</p>

**Kind**: global function  
**Returns**: <code>number</code> - <p>The percentage of sentence characters in relation to the total number of characters in the text.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>The input text for which the sentence percentage needs to be calculated.</p> |
| totalCharacters | <code>number</code> | <p>The total number of characters in the text.</p> |

<a name="getTextFromFiles"></a>

## getTextFromFiles(file) ⇒ <code>string</code>
<p>Extracts text from either a PDF or a DOCX file.</p>

**Kind**: global function  
**Returns**: <code>string</code> - <p>The extracted text from the file.</p>  

| Param | Description |
| --- | --- |
| file | <p>The file from which to extract text. It can be either a PDF or a DOCX file.</p> |

<a name="AuthOptions"></a>

## AuthOptions : <code>Object</code>
<p>Configuration options for NextAuth.</p>

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| adapter | <code>PrismaAdapter</code> | <p>The Prisma adapter for NextAuth.</p> |
| providers | <code>Array</code> | <p>The authentication providers.</p> |
| pages | <code>Object</code> | <p>The pages for sign in.</p> |
| debug | <code>boolean</code> | <p>Whether to enable debug mode.</p> |
| session | <code>Object</code> | <p>The session options.</p> |
| secret | <code>string</code> | <p>The secret for NextAuth.</p> |

