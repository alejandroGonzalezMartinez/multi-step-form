export function Form({ fields }) {
  return (
    <form className='form'>
      {
        fields?.map((field, index) => (
          <FormField key={index} field={field} />
        ))
      }
    </form>
  )
}

export function FormField({ field }) {
  return (
    <div className='form-field'>
      <h3 className='title'>{field.title}</h3>
      <input
        name={field.name}
        type={field.type}
        defaultValue={field.value}
        placeholder={field.placeholder}
        className='input'
      />
    </div>
  )
}