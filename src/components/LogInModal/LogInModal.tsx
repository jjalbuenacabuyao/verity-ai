import { Root, Trigger, Portal, Overlay, Content, Title } from "@radix-ui/react-dialog"

type Props = {}

const LogInModal = (props: Props) => {
  return (
    <Root>
      <Trigger asChild>
        <button>Login</button>
      </Trigger>
      <Portal>
        <Overlay />
        <Content>
          <Title>Login your account</Title>
          <form>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </fieldset>

            <fieldset>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </fieldset>
          </form>
        </Content>
      </Portal>
    </Root>
  )
}

export default LogInModal