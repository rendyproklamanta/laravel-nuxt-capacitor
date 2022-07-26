import { mount } from '@vue/test-utils'
import TransitionScaleIn from '@/components/transition/TransitionScaleIn.vue'

test('TransitionScaleIn', () => {
  const wrapper = mount(TransitionScaleIn, {
    props: {
      appear:  true,
    },
  })

  expect(wrapper.text()).toContain('')

})
