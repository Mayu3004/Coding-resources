import java.util.Arrays;

public class Test {
    public static void main(String[] args) {
        //finding the second largest element in the array
        Test obj = new Test();
        int arr[] = {1, 2, 4, 6, 7, 5};
        int n = arr.length;
        obj.secondLargest(arr,n);
    }
    void secondLargest(int arr[],int n){
        int max = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;
        // for(int i = 0;i<n;i++){
            
        //     if(arr[i]>max){
        //         max = arr[i];
        //     }else if(max>secondMax){
        //         secondMax = max;
        //     }
        // }
        Arrays.sort(arr);
        secondMax = arr[1];
        System.out.println(secondMax);
    }
}
