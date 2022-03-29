//O(n) -> pq faz a busca em toda a lista do começo até o fim
function sembinaria(list, item){
    for(let i =0; i < list.length; i++){
        if(list[i] == item){
//console.log(list[i])

            return i
        }
    }
    return -1
}

let t_search = process.hrtime.bigint()
const lista = [1,3,5,7,9]
const teste = sembinaria(lista, 9)
t_search = (process.hrtime.bigint() - t_search) 
//console.log(teste, t_search)


// O(log(n)) -> pq faz a busca em uma parte da lista
function binaria(list, item){
    let low = 0
    let up = list.length - 1

    while(low <= up){
        let mid = Math.floor((low + up)/2) // pegar o inicio mais alto e dividir por 2

        if(list[mid] == item){
            return mid
        }else if(item < list[mid]){
            up = mid - 1 // se item for menor meio então que dize que o
                        // alto tem que atualizar para o meio - 1 pq alto vai começar do meio
        }else{
            low = mid + 1 // se item for maior meio então que dize que o low agr tem que começar do meio
                        
        }
    }

    return -1
}

let b_search = process.hrtime.bigint() // aqui e para ver o tempo de execução
const list = [1,3,5,7,9]
const testeB = sembinaria(lista, 9)
b_search = (process.hrtime.bigint() - b_search) 
// para descobrir o tempo de execução da function colocar hrtime antes
// e embaixo da function faz otro hrtime - o do de cima
console.log(testeB, b_search)