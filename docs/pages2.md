## Functions

<dl>
<dt><a href="#Dashboard">Dashboard()</a> ⇒ <code>Promise.&lt;JSX.Element&gt;</code></dt>
<dd><p>Renders the dashboard page.</p>
<p>Retrieves the current user and the total number of users from the database. If the current user is not an admin, it renders the <code>AccessDenied</code> component. Otherwise, it renders the <code>DashboardContents</code> component with the total number of users passed as a prop.</p></dd>
<dt><a href="#Detector">Detector()</a> ⇒ <code>React.JSX.Element</code></dt>
<dd><p>Renders the detector page.</p>
<p>React component that checks if the user is logged in and renders the AccessDenied component if not.
It consists of an <code>Aside</code> component for file upload and a <code>ResultContainer</code> component for displaying
the detection results.</p></dd>
</dl>

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
