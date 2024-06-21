namespace RailwayOriented.Core;

public sealed record Error(ErrorType Code, string Description)
{
    public static readonly Error None = new(ErrorType.None, string.Empty);
}
