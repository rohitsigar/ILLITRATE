int start = 0;                          //initializing pointer
int end = array.length - 1;             //initializing pointer
int mid = 0;                            //initializing pointer

while (start <= end)                     //searching the element
{
    mid = (start + end) / 2;
    if (array[mid] < x)
    {
        start = mid + 1;
    }
    else if (array[mid] > x)           
    {
        end = mid - 1;
    }
    else
    {
        return mid;
    }
}

return -1;