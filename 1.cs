using System;

public class HelloWorld
{
    public static void ArrayCheck(Array, i)
    {
        int cnt = 0;
        while (cnt<ArrayCheck.length) {
            int nextIndex = ArrayCheck[i];
            if (nextIndex === 0) {
                break;
            }
            i = nextIndex;
            if (cnt == ArrayCheck.length - 1 && i == 0) {
                return true;
            }
            cnt++
        }
        return false;
    }
    public static void Main(string[] args)
    {
        Console.WriteLine("hwllo");
        new int[] Array = {1,2,5,1,3,4};
        int i = 0;
        Console.WriteLine(ArrayCheck(Array, i));

    }
}