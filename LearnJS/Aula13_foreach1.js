const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){   //indice sempre é passado como segundo parametro, terceiro parametro é o array
    console.log(`${indice +1}) ${nome}`)
    //console.log(array)
})

aprovados.forEach(nome => process.stdout.write(nome+" ")) //Ele não pula linha diferente do console.log

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
