#### Primary Button

```js
<Button text="Primary" onClick={() => alert('Primary button click')} />
<Button text="Primary icon" extraClass="margin-left-10" icon="trash-alt" />
<Button text="Primary small" extraClass="margin-left-10" small />

```

#### Secondary Button

Add **secondary** to _variant_ propierty.

```js
<Button text="Secondary" variant="secondary" onClick={() => alert('Secondary button click')} />
<Button text="Secondary" variant="secondary" extraClass="margin-left-10" icon="trash-alt" />
<Button text="Secondary small" variant="secondary" extraClass="margin-left-10" small />
```

#### Terciary Button

Add **terciary** to _variant_ propierty.

```js

<Button text="Terciary" variant="terciary" onClick={() => alert('Terciary button click')} />
<Button text="Terciary" variant="terciary" extraClass="margin-left-10" icon="trash-alt" />
<Button text="Terciary small" variant="terciary" extraClass="margin-left-10" small />
```

#### Disabled Button

Add _disabled_ propierty.

```js
<Button text="Primary disabled" disabled  />
<Button text="Secondary disabled" variant="secondary" extraClass="margin-left-10" icon="trash-alt" disabled />
<Button text="Terciary disabled" variant="terciary" extraClass="margin-left-10" disabled small />
```
