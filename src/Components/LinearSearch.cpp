#include <iostream>
using namespace std;

int linearSearch(int array[], int size, int searchValue){
    for (int i=0; i < size; i++){        //linear search for searched value
        if(searchValue == array[i]){
            return i;
        }
    }   //end of for loop
    return -1;
}