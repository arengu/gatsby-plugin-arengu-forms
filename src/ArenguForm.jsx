import React from 'react'
import PropTypes from 'prop-types'

const ARENGU_SDK_LOADED = `af-init`

/**
 * Component to render a form from Arengu
 */
export class ArenguForm extends React.Component {

  constructor() {
    super()
    this.ref = null
    this.saveRef = this.saveRef.bind(this)
  }

  setHiddenFields(form) {
    const { hiddenFields } = this.props

    if (hiddenFields) {
      return hiddenFields.forEach((o) => {
        form.setHiddenField(o.key, o.value)
      })
    }

    return null
  }

  initSdk() {
    const { id } = this.props

    return window.ArenguForms.embed(id, this.ref)
      .then((form) => this.setHiddenFields(form))
  }

  removeListeners() {
    document.removeEventListener(ARENGU_SDK_LOADED, this.initSdk())
  }

  waitLoadEventAndInitSdk() {
    document.addEventListener(ARENGU_SDK_LOADED, this.initSdk())
  }

  saveRef(ref) {
    this.ref = ref
  }

  componentDidMount() {
    if (window.ArenguForms) {
      this.initSdk()
    } else {
      this.waitLoadEventAndInitSdk()
    }
  }

  componentWillUnmount() {
    this.removeListeners()
  }

  render() {
    return (<div ref={this.saveRef} />)
  }
}

ArenguForm.propTypes = {
  /** Form ID to be rendered */
  id: PropTypes.string.isRequired,
  /** Array of hidden fields to bet set */
  hiddenFields:  PropTypes.arrayOf(
    PropTypes.shape({
      /** Key of your hidden field */
      key: PropTypes.string,
      /** Value of your hidden field */
      value: PropTypes.string,
    })
  ),
}

export default ArenguForm
