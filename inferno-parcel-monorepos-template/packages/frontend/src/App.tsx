import { Button } from 'components';
import './app.scss'

/**
 * The Application
 */
type TApp = {
  title: string,
  children: any
}
export function App({ title, children }: TApp) {
  return (
    <article>
      <h1>{title}</h1>
      {children}
    </article>
  )
};

export function appFactory () {

  return (
      <App title="Inferno Monorepo Template">
        <Button onClick={(e) => alert("This works!")}>Click me!</Button>
      </App>
  )
}
