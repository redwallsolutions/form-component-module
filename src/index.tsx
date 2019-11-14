import React, { useState } from 'react'
import { render } from 'react-dom'

import { InputField, Form } from './lib'
import { createGlobalStyle } from 'styled-components'
import { ICommonProps, ITheme } from '@redwallsolutions/common-interfaces-ts'

const Reset = createGlobalStyle<ICommonProps>`
  body {
    background-color: ${props =>
			props.theme.mode === 'light' ? 'white' : 'rgba(20, 20, 20)'};
    padding: 2em;
    margin: 0;
  }
`

const App = () => {
	const [mode, setMode] = useState('light')
	const getApi = api => {
		console.log('oi', api)
	}

	const onSubmit = params => {
		console.log(params)
	}

	return (
		<Form getApi={getApi} onSubmit={onSubmit}>
			<div>
				<Reset theme={{ mode }} />
				<InputField
					theme={{ mode } as ITheme}
					appearance="default"
					label="A default input"
					field="default"
				/>
				<InputField
					theme={{ mode } as ITheme}
					appearance="default"
					label="Inside that label there is a soooooooooo long text."
					field="long"
				/>
				<InputField
					theme={{ mode } as ITheme}
					appearance="primary"
					label="A primary input"
					field="primary"
				/>
				<InputField
					theme={{ mode } as ITheme}
					appearance="secondary"
					label="A secondary input"
					field="secondary"
				/>
				<InputField
					theme={{ mode } as ITheme}
					appearance="primary"
					label="A password type input"
					type="password"
					field="password"
				/>
				<InputField
					theme={{ mode, default: '#497799', defaultDark: '#497799' } as ITheme}
					appearance="default"
					label="Custom color"
					field="customColor"
				/>
				<InputField
					theme={{ mode, default: 'orange', defaultDark: 'orange' } as ITheme}
					appearance="default"
					label="Custom color 2"
					field="cc2"
				/>
				<InputField
					theme={{ mode } as ITheme}
					appearance="default"
					label="A initial value"
					initialValue="This is a initial value"
					field="initial"
				/>
				<InputField
					theme={{ mode, primary: 'green' } as ITheme}
					appearance="primary"
					label="Money"
					maskType="money"
					field="money"
				/>
				<InputField
					theme={{ mode, primary: 'blue' } as ITheme}
					appearance="primary"
					label="Percentage"
					maskType="percent"
					field="percent"
				/>
				<InputField
					theme={{ mode, primary: 'purple' } as ITheme}
					appearance="primary"
					label="Cel number"
					maskType="cel"
					field="cel"
				/>
				<button type="submit">Send</button>
			</div>
		</Form>
	)
}

render(<App />, document.querySelector('#app'))
