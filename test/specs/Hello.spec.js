import { mount, createLocalVue } from '@vue/test-utils'
import Hello from '@/components/Hello'

test('Hello has .hello class', () => {
  const vue = createLocalVue()
  const hello = mount(Hello, { vue })

  expect(hello.classes()).toContain('hello')
})
