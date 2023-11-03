## Constants

<dl>
<dt><a href="#handler">handler</a> ⇒ <code>NextAuth</code></dt>
<dd><p>The NextAuth handler.</p></dd>
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

