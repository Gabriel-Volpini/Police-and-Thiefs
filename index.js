
const formatData = (data, range) => {
    const formated_data = data.map((value, index) => ({index, type}));
    
    return formated_data.forEach((value) => ({
        const accessible_oposite_values = get_accessible_oposite_values(
            value.index, range, formated_data
        )
        return({...value}, accessible_oposite_values.length)
    }))
    
}

const get_accessible_oposite_values = (index, range, data) => {
    const start = Math.max(0, index - range)
    const end = Math.min(data.length, index + range + 1)
    const accessible_values = data.filter((value) => value.type != data[index].type)
    
    return accessible_values;
}
    
const get_num_possible_catches = (data, range) => {
    const polices = get_selected_types("P", data)
    const got_a_catch = []
    const catched = []
    
    for police in polices{
        const accessible_thiefs = get_accessible_oposite_values(data.index(police), range, data);
        
        if accessible_thiefs.length > 0:
            accessible_thiefs.sort((item) => imte.accessible)
            const wanted_thief = accessible_thiefs[0]
            
            data.filter((item) => item.index != wanted_thief.index)
            catched.push(wanted_thief)
            got_a_catch.push(police)
    }
    
    return got_a_catch.length
}

const get_selected_types = (wanted_type, data) =>{
    const selected_types = data.find(item => item.type.toUpperCase() === wanted_type.toUpperCase())
    
    return selected_types.sort((item) => item.accessible)
}

const k = 2
const input = ["T", "T", "P", "P", "T", "P"]
const formated_data = format_data(input, k)
