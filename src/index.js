import { createForm, fieldSubscriptionItems } from 'final-form'

// Form field names
const names = {
    heroName: "heroName",
    titleQualifier: "titleQualifier",
    title: "title",
    land: "land",
    weapon: "weapon",
}

// Elements
const formEl = document.getElementById("form")
const submitBtnEl = document.getElementById("submit")

// https://final-form.org/docs/final-form/types/Config#initialvalues
const initialValues = {
    [names.heroName]: "Dragonious",
    [names.titleQualifier]: "Masterful",
    [names.title]: "King",
    [names.land]: "Albion",
    [names.weapon]: "Sword of Truth",
}

// https://final-form.org/docs/final-form/types/Config#onsubmit
const onSubmit = (values, form) => {
    const { heroName, titleQualifier, title, land, weapon} = values
    setTimeout(() => {
        alert(`All hail ${heroName}, the ${titleQualifier.toLowerCase()} ${title} of ${land}, wielder of the ${weapon}!`)
    }, 300)
}

// https://final-form.org/docs/final-form/types/Config#validate
const validate = (values) => {
    console.log(values)
}

// Create Form
const form = createForm({ initialValues, onSubmit, validate })

// Subscribe to form state updates
// Any update to any form field will trigger update
const unsubscribe = form.subscribe(
  (formState) => {
    // Run when a subscribed to form state changes
    console.log("Form Subscriber Finished...")
  },
  { // FormSubscription: the list of values you want to be updated about
    dirty: true,
    valid: true,
    values: true
  }
)

// Dictionary of inputs registered 
const registered = {}

const registerField = (inputName) => {
    // Get the element by its name
    const el = document.getElementsByName(inputName).item(0)
    
    if (!el) {
        console.log(`could not find ${inputName}...`)
        return
    }

    // Subscribe to field state updates
    const unregisterField = form.registerField(
        inputName,
        (fieldState) => {    
        // Get the field state attributes (unlisted will be inside of `rest`)
        const { blur, change, focus, value, ...rest } = fieldState
    
        // Register field if it hasn't had listeners attached yet
        const initalRegistration = () => {
            el.addEventListener("blur", () => blur())
            el.addEventListener("focus", () => focus())
            el.addEventListener("input", (event) => {
                change(event.target.value)
            })

            registered[inputName] = true
        }
    
        if (!registered[inputName]) {
            initalRegistration()
        }

        // Ensure UI state matches form engine state
        console.log(value)
        el.value = value === undefined ? "" : value
    
        // Do every time subscriber is called...
        console.log("Field Subscriber Finished...")
    
        },
        { // FieldSubscription: the list of values you want to be updated about
            value: true,
        }
    )
}

// Register all inputs by name
for (const name in names) {
    registerField(name)
}

// Submit
submitBtnEl.addEventListener('click', (e) => {
    e.preventDefault()
    form.submit()
})


