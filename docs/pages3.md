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
</dl>

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

## POST(request) ⇒ <code>Promise.&lt;NextResponse&gt;</code>
<p>Handles a POST request to update the role of a user in a database using the Prisma ORM.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;NextResponse&gt;</code> - <p>A JSON response object indicating the success of the operation.</p>  

| Param | Description |
| --- | --- |
| request | <p>The HTTP request object containing the user's data.</p> |

<a name="POST"></a>

## POST(request) ⇒ <code>Promise.&lt;NextResponse&gt;</code>
<p>Handles a POST request to delete a user from the database.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;NextResponse&gt;</code> - <p>A JSON response indicating success.</p>  

| Param | Description |
| --- | --- |
| request | <p>The request object containing the JSON payload with the user ID.</p> |

<a name="POST"></a>

## POST(request) ⇒ <code>Promise.&lt;Response&gt;</code>
<p>Handles a POST request and processes the extracted text.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;Response&gt;</code> - <ul>
<li>A promise that resolves to a response with the AI-generated percentage and the texts with their scores and labels.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>Request</code> | <p>The POST request object containing a JSON payload with an <code>extractedText</code> property.</p> |

<a name="POST"></a>

## POST(request) ⇒ <code>Promise.&lt;Response&gt;</code>
<p>Handles a POST request to create a new user in the database.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;Response&gt;</code> - <p>The created user object as a JSON response.</p>  
**Throws**:

- <code>Error</code> <p>If a user with the same email already exists in the database.</p>


| Param | Type | Description |
| --- | --- | --- |
| request | <code>Request</code> | <p>The HTTP request object containing the user data in the request body.</p> |

<a name="GET"></a>

## GET(req) ⇒ <code>Promise.&lt;NextResponse&gt;</code>
<p>Retrieves users from a database based on search criteria and pagination.</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;NextResponse&gt;</code> - <p>A JSON response containing either the search results or the paginated users from the database.</p>  

| Param | Description |
| --- | --- |
| req | <p>The HTTP request object containing the URL with query parameters for pagination (<code>page</code>) and search criteria (<code>search</code>).</p> |

