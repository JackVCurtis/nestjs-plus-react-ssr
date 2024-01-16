import React from 'react'

import { screen } from '@testing-library/react'
import { render } from 'test-utils'
import Landing from './Landing'

describe('Landing', () => {
    it('renders the page successfully',async () => {
        await render(Landing, { greeting: 'Test' })
        expect(screen.getByRole('heading')).toHaveTextContent('Test')
    })
})