import {Component} from 'react'

import {
  MainContainer,
  Heading,
  ContentContainer,
  SearchInput,
  Button,
  SaveContainer,
  EditContainer,
} from './styledComponent'

class EditableText extends Component {
  state = {inputText: '', onClick: true}

  onChanged = e => {
    this.setState({inputText: e.target.value})
  }

  onButtonClick = () => {
    const {onClick} = this.state

    console.log(onClick)

    this.setState(prevState => ({onClick: !prevState.onClick}))
  }

  render() {
    const {inputText, onClick} = this.state
    return (
      <MainContainer>
        <ContentContainer>
          <Heading>Editable Text Input</Heading>
          {onClick ? (
            <SaveContainer>
              <SearchInput
                type="text"
                onChange={this.onChanged}
                borderColor={onClick}
                value={inputText}
              />
              <Button onClick={this.onButtonClick}>Save</Button>
            </SaveContainer>
          ) : (
            <EditContainer>
              <p className="inputValue">{inputText}</p>
              <Button onClick={this.onButtonClick}>Edit</Button>
            </EditContainer>
          )}
        </ContentContainer>
      </MainContainer>
    )
  }
}
export default EditableText
